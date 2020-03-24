import VeeValidate from './plugin';
import directive from './directive';
import mixin from './mixin';
import Validator from './core/validator';
import ErrorBag from './core/errorBag';
import mapFields from './core/mapFields';

const version = '__VERSION__';
const install = VeeValidate.install;
const use = VeeValidate.use;
const setMode = VeeValidate.setMode;

export {
  install,
  use,
  setMode,
  directive,
  mixin,
  mapFields,
  Validator,
  ErrorBag,
  version,
};

VeeValidate.version = version;
VeeValidate.mapFields = mapFields;

export default VeeValidate;
