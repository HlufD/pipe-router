import { describe, it, expect } from 'vitest'
import { Trie } from "../learn/Trie/index"

describe('Trie', () => {
    it('should insert and find words', () => {
        const trie = new Trie()
        trie.insert('cat')
        trie.insert('car')
        trie.insert('dog')

        expect(trie.find('cat')).toBe(true)
        expect(trie.find('car')).toBe(true)
        expect(trie.find('dog')).toBe(true)
        expect(trie.find('cow')).toBe(false)
    })

    it('should check prefixes', () => {
        const trie = new Trie()
        trie.insert('car')
        trie.insert('cat')

        expect(trie.startsWith('ca')).toBe(true)
        expect(trie.startsWith('c')).toBe(true)
        expect(trie.startsWith('d')).toBe(false)
    })
})
