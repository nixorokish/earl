import { Control, Expectation, getControl } from 'earljs/internals'

import { isHexString } from '../utils'

export function toBeAHexString(this: Expectation<any>, length?: number): void {
  const ctrl = getControl(this) as Control<string>

  if (length !== undefined) {
    ctrl.assert({
      success: isHexString(ctrl.actual, length),
      reason: `String "${ctrl.actual}" is not a hex string of length ${length}!`,
      negatedReason: `String "${ctrl.actual}" is a hex string of length ${length}!`,
    })
  } else {
    ctrl.assert({
      success: isHexString(ctrl.actual),
      reason: `String "${ctrl.actual}" is not a hex string!`,
      negatedReason: `String "${ctrl.actual}" is a hex string!`,
    })
  }
}