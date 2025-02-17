import {getBootstrapBaseClassPlacement, getPopperClassPlacement, ngbPositioning, Placement} from './positioning';
import {Placement as PopperPlacement} from '@popperjs/core';
describe('positioning', () => {

  /**
   * Object of bootstrap classes for the keys, and their corresponding popper ones in the values
   */
  const matchingBootstrapPopperPlacements = {
    'top': 'top',
    'bottom': 'bottom',
    'start': 'left',
    'left': 'left',
    'end': 'right',
    'right': 'right',
    'top-start': 'top-start',
    'top-left': 'top-start',
    'top-end': 'top-end',
    'top-right': 'top-end',
    'bottom-start': 'bottom-start',
    'bottom-left': 'bottom-start',
    'bottom-end': 'bottom-end',
    'bottom-right': 'bottom-end',
    'start-top': 'left-start',
    'left-top': 'left-start',
    'start-bottom': 'left-end',
    'left-bottom': 'left-end',
    'end-top': 'right-start',
    'right-top': 'right-start',
    'end-bottom': 'right-end',
    'right-bottom': 'right-end'
  };

  const matchingPopperBootstrapPlacements = {
    'top': 'top',
    'bottom': 'bottom',
    'left': 'start',
    'right': 'end',
    'top-start': 'top top-start',
    'top-end': 'top top-end',
    'bottom-start': 'bottom bottom-start',
    'bottom-end': 'bottom bottom-end',
    'left-start': 'start start-top',
    'left-end': 'start start-bottom',
    'right-start': 'end end-top',
    'right-end': 'end end-bottom',
  };

  it('should convert bootstrap classes to popper classes', () => {

    for (const[bsClass, popperClass] of Object.entries(matchingBootstrapPopperPlacements)) {
      expect(getPopperClassPlacement(bsClass as Placement)).toBe(popperClass);
    }
  });

  it('should convert popper classes to bootstrap classes', () => {

    for (const[popperClass, bsClass] of Object.entries(matchingPopperBootstrapPlacements)) {
      expect(getBootstrapBaseClassPlacement('', popperClass as PopperPlacement)).toBe(bsClass);
    }
  });

  it('should update classes correctly on DOM elements', (done) => {
    const testCases = [
      ['top', 'bs-base-top'],
      ['bottom', 'bs-base-bottom'],
      ['start', 'bs-base-start'],
      ['left', 'bs-base-start'],
      ['end', 'bs-base-end'],
      ['right', 'bs-base-end'],
      ['top-start', 'bs-base-top bs-base-top-start'],
      ['top-left', 'bs-base-top bs-base-top-start'],
      ['top-end', 'bs-base-top bs-base-top-end'],
      ['top-right', 'bs-base-top bs-base-top-end'],
      ['bottom-start', 'bs-base-bottom bs-base-bottom-start'],
      ['bottom-left', 'bs-base-bottom bs-base-bottom-start'],
      ['bottom-end', 'bs-base-bottom bs-base-bottom-end'],
      ['bottom-right', 'bs-base-bottom bs-base-bottom-end'],
      ['start-top', 'bs-base-start bs-base-start-top'],
      ['left-top', 'bs-base-start bs-base-start-top'],
      ['start-bottom', 'bs-base-start bs-base-start-bottom'],
      ['left-bottom', 'bs-base-start bs-base-start-bottom'],
      ['end-top', 'bs-base-end bs-base-end-top'],
      ['right-top', 'bs-base-end bs-base-end-top'],
      ['top', 'bs-base-top']
    ];

    const positioning = ngbPositioning();
    const options = {
      targetElement: document.createElement('div'),
      hostElement: document.createElement('div'),
      placement: 'top',
      baseClass: 'bs-base'
    };
    positioning.createPopper(options);

    function nextTest() {
      if (testCases.length === 0) {
        done();
        return;
      }

      const[placement, expectedClassName] = testCases.shift() !;
      positioning.setOptions({...options, placement});

      // checking DOM after popper does 'forceUpdate'
      queueMicrotask(() => {
        expect(options.targetElement.className)
            .toBe(expectedClassName, `Testing '${placement}' mapping to '${expectedClassName}'`);
      });

      setTimeout(nextTest);
    }

    nextTest();
  });
});
