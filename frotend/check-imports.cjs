const fs = require('fs');
const path = require('path');

function checkImports(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkImports(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
          let resolvedPath = path.resolve(path.dirname(fullPath), importPath);
          
          let exts = ['.jsx', '.js', '/index.jsx', '/index.js', '.css', ''];
          let foundPath = null;
          for (let e of exts) {
              if (fs.existsSync(resolvedPath + e) && fs.statSync(resolvedPath + e).isFile()) {
                  foundPath = resolvedPath + e;
                  break;
              }
          }
          
          if(foundPath) {
             const dirName = path.dirname(foundPath);
             const baseName = path.basename(foundPath);
             const actualFiles = fs.readdirSync(dirName);
             if (!actualFiles.includes(baseName)) {
                 console.log(`\nCase mismatch found!`);
                 console.log(`File: ${fullPath}`);
                 console.log(`Import: "${importPath}"`);
                 console.log(`Expected file exact case: one of [${actualFiles.join(', ')}]`);
             }
          } else {
             // Maybe it doesn't exist at all?
             console.log(`\nMissing file (or case mismatch directory)!`);
             console.log(`File: ${fullPath}`);
             console.log(`Import: "${importPath}"`);
          }
        }
      }
    }
  }
}

checkImports(path.join(process.cwd(), 'src'));
