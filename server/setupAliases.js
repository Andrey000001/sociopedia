import moduleAlias from 'module-alias';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

moduleAlias.addAliases({
  '@': path.resolve(__dirname),
  controllers: path.resolve(__dirname, 'controllers'),
  routes: path.resolve(__dirname, 'routes'),
  models: path.resolve(__dirname, 'models'),
});
