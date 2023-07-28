import fs from 'fs';
import path from 'path';
import readline from 'readline';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const createComponent = (componentName) => {
  // Obtener la ruta del archivo actual
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);

  const componentDir = path.join(
    __dirname,
    '..',
    'src',
    'components',
    componentName,
  );

  fs.mkdirSync(componentDir);
  fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), '');
  fs.writeFileSync(path.join(componentDir, `${componentName}.css`), '');

  console.log(`Component "${componentName}" created successfully!`);
};

const rl = readline.createInterface({
  // eslint-disable-next-line no-undef
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout,
});

rl.question('Enter the name of the new component: ', (componentName) => {
  const capitalizedComponentName = capitalize(componentName);

  createComponent(capitalizedComponentName);
  rl.close();
});
