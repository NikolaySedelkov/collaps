import CollapseWithChildren from "./CollapseWithChildren";

function createMarkup(content) {
    return {__html: content};
  }

function Collapse({collapsedLabel="Развернуть", expandedLabel="Свернуть"}){
    return (
       <CollapseWithChildren title={collapsedLabel}>
            <div className="conteiner__body-collapse"  dangerouslySetInnerHTML={createMarkup(expandedLabel)}/>
       </CollapseWithChildren>
    )
}

export default Collapse;