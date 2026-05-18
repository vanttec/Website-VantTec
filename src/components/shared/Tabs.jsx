import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

const TabsComponent = ({ tabs, defaultSelected = "photos" }) => {
  const [selected, setSelected] = React.useState(defaultSelected);

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={setSelected}>
        {tabs.map((tab, index) => (
          <Tab key={tab.key} title={tab.title}>
            <Card>
              <CardBody>
                {/* Render the content as a string */}
                {tab.content}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
