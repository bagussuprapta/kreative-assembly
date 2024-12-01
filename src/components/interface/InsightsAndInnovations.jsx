import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

function Card({ date, category, title, image }) {
  return (
    <div className="rounded-xl overflow-hidden h-48 flex md:rounded-none md:gap-x-4 md:h-40 lg:h-52">
      <div className="bg-bugbug-25 w-2/3 py-3 px-4 flex flex-col gap-y-3 md:rounded-xl md:flex-row md:gap-x-5 xl:px-9 xl:py-7">
        <div className="flex flex-col items-start gap-y-2 md:w-2/5 md:justify-between">
          <date>{date}</date>
          <button className="text-sm bg-bugbug-150 px-4 py-2 rounded-md hover:bg-bugbug-160">{category}</button>
        </div>
        <div className="overflow-scroll hide-scrollbar text-base md:w-3/5 md:text-xl">{title}</div>
      </div>
      <div className="w-1/3 md:rounded-xl md:overflow-hidden">
        <div className="h-full">
          <div className="h-full">
            <img src={image} alt="Image" className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButtonCategory({ title }) {
  return (
    <Tab className={"text-sm tracking-wide data-[selected]:bg-bugbug-150 data-[selected]:border-bugbug-150 border-2 border-bugbug-150 outline-none text-nowrap bg-white px-5 py-2 rounded-lg"}>
      {title}
    </Tab>
  );
}

function InsightsAndInnovations() {
  return (
    <div>
      <h2 className="mb-5 text-3xl lg:text-4xl xl:text-5xl text-center">
        Insights and <br /> Innovations
      </h2>
      <TabGroup>
        <TabList className={"flex mb-6 space-x-4 overflow-x-auto hide-scrollbar"}>
          <TabButtonCategory title={"SHOW ALL"} />
          <TabButtonCategory title={"CATEGORY 1"} />
          <TabButtonCategory title={"CATEGORY 2"} />
          <TabButtonCategory title={"CATEGORY 3"} />
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="flex flex-col gap-y-5">
              <Card
                date={"NOV 26TH, 2024"}
                category={"CATEGORY HERE"}
                title={"The Future of Sustainable Farming: AI Meets Agriculture"}
                image={"https://www.figma.com/file/5ILIqU4cZCje3cmnhh4Oo3/image/0535c42f3d2a337a7f3815225c963bb09a10a656"}
              />
              <Card
                date={"SEP 5TH, 2024"}
                category={"CATEGORY HERE"}
                title={"Understanding Insect Patterns: How AI Enhances Monitoring Precision"}
                image={"https://www.figma.com/file/5ILIqU4cZCje3cmnhh4Oo3/image/2d5691d273af1beb65378caae1d4dd4f62c18752"}
              />
              <Card
                date={"JUL 3RD, 2024"}
                category={"CATEGORY HERE"}
                title={"A Minimalist Approach to Maximizing Yield: Why Less is More"}
                image={"https://www.figma.com/file/5ILIqU4cZCje3cmnhh4Oo3/image/988f5bd294a9a9fd6ce8e1edbe926cc3aa235f2a"}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-y-5">
              <Card
                date={"NOV 26TH, 2024"}
                category={"CATEGORY 1"}
                title={"The Future of Sustainable Farming: AI Meets Agriculture"}
                image={"https://www.figma.com/file/5ILIqU4cZCje3cmnhh4Oo3/image/0535c42f3d2a337a7f3815225c963bb09a10a656"}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-y-5">
              <Card
                date={"SEP 5TH, 2024"}
                category={"CATEGORY 2"}
                title={"Understanding Insect Patterns: How AI Enhances Monitoring Precision"}
                image={"https://www.figma.com/file/5ILIqU4cZCje3cmnhh4Oo3/image/2d5691d273af1beb65378caae1d4dd4f62c18752"}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-y-5">
              <Card
                date={"JUL 3RD, 2024"}
                category={"CATEGORY 3"}
                title={"A Minimalist Approach to Maximizing Yield: Why Less is More"}
                image={"https://www.figma.com/file/5ILIqU4cZCje3cmnhh4Oo3/image/988f5bd294a9a9fd6ce8e1edbe926cc3aa235f2a"}
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export { InsightsAndInnovations };
