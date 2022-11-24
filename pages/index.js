import Layout from "../components/Layout";
import {
    getSinglePost,
    getDirectoryData,
    convertObject,
    getFlattenArray,
} from "../lib/utils";
import FolderTree from "../components/FolderTree";
import MDContent from "../components/MDContent";


export default function Home({content, tree, flattenNodes, backLinks}) {
    return (
        <Layout>
            <div className = 'container'>
                <nav className="nav-bar">
                    <FolderTree tree={tree} flattenNodes={flattenNodes}/>
                </nav>
                <MDContent content={content}  handleOpenNewContent={null} backLinks={backLinks}/>
            </div>
        </Layout>
    );

}

export function getStaticProps() {
    const tree = convertObject(getDirectoryData());
    const contentData = getSinglePost("index");
    const flattenNodes = getFlattenArray(tree)
    const listOfEdges =   edges.filter(anEdge => anEdge.target === "index")
    const internalLinks = listOfEdges.map(anEdge => nodes.find(aNode => aNode.slug === anEdge.source)).filter(element => element !== undefined)
    const backLinks = [...new Set(internalLinks)]

    return {
        props: {
            content: contentData.data,
            tree: tree,
            flattenNodes: flattenNodes,
            backLinks: backLinks
        },
    };
}
