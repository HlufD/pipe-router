import { HTTP_METHODS } from "../enums/methods.enum";
import { RouteHandler } from "../types/route-handler";

class TrieNode {
    handlers: Map<HTTP_METHODS, RouteHandler[]> | null = null;
    children: Map<string, TrieNode> | null = null;
}

class Trie {
    private root = new TrieNode();

    public insert(url: string, method: HTTP_METHODS, handlers: RouteHandler | RouteHandler[]) {
        const segments = url.split("/").filter(segment => segment.length != 0)
        let currNode = this.root as TrieNode

        console.log(segments)

        for (const segment of segments) {

            if (!currNode.children) {
                currNode.children = new Map()
            }

            if (!currNode.children.has(segment)) {
                currNode.children.set(segment, new TrieNode())
            }

            currNode = currNode.children.get(segment)!;
        }

        currNode.handlers = currNode.handlers || new Map();
        handlers = Array.isArray(handlers) ? handlers : [handlers]
        currNode.handlers.set(method, handlers)

    }
}


const trie = new Trie()
//trie.insert("//users/profile", HTTP_METHODS.GET, () => { })
trie.insert("//users/profile", HTTP_METHODS.GET, [() => { }, () => { }])
trie.insert("//users/", HTTP_METHODS.GET, () => { })
trie.insert("//users/", HTTP_METHODS.POST, () => { })
trie.insert("/", HTTP_METHODS.GET, () => { })

console.dir(trie, { depth: null })

