import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  DEFAULT_ENTRY_NAME,
  FirebaseError,
  SDK_VERSION,
  _addComponent,
  _addOrOverwriteComponent,
  _apps,
  _clearComponents,
  _components,
  _getProvider,
  _isFirebaseApp,
  _isFirebaseServerApp,
  _registerComponent,
  _removeServiceInstance,
  _serverApps,
  deleteApp,
  getApp,
  getApps,
  initializeApp,
  initializeServerApp,
  onLog,
  registerVersion,
  setLogLevel
} from "./chunk-V73HU7OI.js";
import "./chunk-YHCV7DAQ.js";

// node_modules/firebase/app/dist/index.mjs
var name = "firebase";
var version = "11.3.1";
registerVersion(name, version, "app");
export {
  FirebaseError,
  SDK_VERSION,
  DEFAULT_ENTRY_NAME as _DEFAULT_ENTRY_NAME,
  _addComponent,
  _addOrOverwriteComponent,
  _apps,
  _clearComponents,
  _components,
  _getProvider,
  _isFirebaseApp,
  _isFirebaseServerApp,
  _registerComponent,
  _removeServiceInstance,
  _serverApps,
  deleteApp,
  getApp,
  getApps,
  initializeApp,
  initializeServerApp,
  onLog,
  registerVersion,
  setLogLevel
};
/*! Bundled license information:

firebase/app/dist/index.mjs:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=firebase_app.js.map
