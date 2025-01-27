// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as chai from 'chai';

import { wait } from '../../src/utils/Utils';

describe('Utils', () => {
  const expect: Chai.ExpectStatic = chai.expect;

  it('atleast waits for the specified delay in milliseconds', async () => {
    const startTime = new Date().getTime();
    const delay = 500;
    await wait(delay);
    const endTime = new Date().getTime();

    // Timing is imprecise. Allow 2 milliseconds of fudge. I have seen this run in 499.
    expect(endTime - startTime).to.gte(delay - 2);
  });
});
