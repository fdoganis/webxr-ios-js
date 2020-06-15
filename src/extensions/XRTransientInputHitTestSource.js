/**
 * Copyright (c) 2019 Mozilla Inc. All Rights Reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. 
 */
export const PRIVATE = Symbol('@@webxr-polyfill/XRTransientInputHitTestSource');

export default class XRTransientInputHitTestSource {
  constructor(options) {
    throw new Error('XRTransientInputHitTestSource is not supported yet.');
  }

  cancel() {
    // @TODO: Implement
  }
}
