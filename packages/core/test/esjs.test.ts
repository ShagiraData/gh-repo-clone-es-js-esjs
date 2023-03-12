import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { transpile } from '../src/index'

const esjsFixtures = import.meta.glob('./fixtures/esjs/*.esjs')

const readFixture = (filepath: string) => {
  const esjsCode = readFileSync(resolve(`${__dirname}/${filepath}`), 'utf-8')
  const jsCode = readFileSync(resolve(`${__dirname}/${filepath.replace('.esjs', '.js')}`), 'utf-8')

  return {
    esjsCode,
    jsCode,
  }
}

describe('transform', () => {
  it('transforms esjs', () => {
    const fixtureKeys = Object.keys(esjsFixtures)

    expect(fixtureKeys.length).toBeGreaterThan(0)

    for (const fixture of fixtureKeys) {
      const { esjsCode, jsCode } = readFixture(fixture)

      const esjsCodeTranspiled = transpile(esjsCode)

      expect(esjsCodeTranspiled).toEqual(jsCode)
    }
  })
})

describe('particular fixture', () => {
  it('transforms esjs', () => {
    const { esjsCode, jsCode } = readFixture('./fixtures/esjs/templateLiterals.esjs')

    const esjsCodeTranspiled = transpile(esjsCode)

    expect(esjsCodeTranspiled).toEqual(jsCode)
  })
})

