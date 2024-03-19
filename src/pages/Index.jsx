import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, List, ListItem, Heading, Text, Button, Icon, Input, Switch, Select, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaUsers, FaPlane, FaHome, FaCog, FaChartBar, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Tabs isFitted variant="enclosed">
        <TabPanels>
          <TabPanel>
            <Heading size="lg" mb={4}>
              الواجهة الرئيسية
            </Heading>
            <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnR8ZW58MHx8fHwxNzEwODIwMDQ0fDA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={8}>
              <Button leftIcon={<FaPlane />}>الرحلات</Button>
              <Button leftIcon={<FaUsers />}>العملاء</Button>
              <Button leftIcon={<FaChartBar />}>الإحصائيات</Button>
            </Grid>
            <Heading size="md" mb={2}>
              آخر الرحلات
            </Heading>
            <List mb={8}>
              <ListItem>رحلة إلى دبي - 2023/07/15</ListItem>
              <ListItem>رحلة إلى القاهرة - 2023/06/20</ListItem>
              <ListItem>رحلة إلى اسطنبول - 2023/05/10</ListItem>
            </List>
            <Heading size="md" mb={2}>
              أقرب أعياد ميلاد العملاء
            </Heading>
            <List>
              <ListItem>أحمد محمد - 1990/08/15</ListItem>
              <ListItem>ليلى خالد - 1985/09/02</ListItem>
              <ListItem>سامي علي - 1992/10/20</ListItem>
              <ListItem>منى سعيد - 1988/11/12</ListItem>
              <ListItem>خالد أحمد - 1995/12/05</ListItem>
            </List>
          </TabPanel>

          <TabPanel>
            <Heading size="lg" mb={4}>
              الرحلات
            </Heading>
            <List>
              <ListItem>
                <Text fontWeight="bold">رحلة إلى دبي</Text>
                <Text>التاريخ: 2023/07/15</Text>
                <Text>عدد المقاعد: 50</Text>
                <Text>عدد المشاركين: 45</Text>
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">رحلة إلى القاهرة</Text>
                <Text>التاريخ: 2023/06/20</Text>
                <Text>عدد المقاعد: 80</Text>
                <Text>عدد المشاركين: 75</Text>
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">رحلة إلى اسطنبول</Text>
                <Text>التاريخ: 2023/05/10</Text>
                <Text>عدد المقاعد: 100</Text>
                <Text>عدد المشاركين: 90</Text>
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel>
            <Heading size="lg" mb={4}>
              العملاء
            </Heading>
            <List>
              <ListItem>
                أحمد محمد
                <Button size="sm" ml={2}>
                  <Icon as={FaPhone} />
                </Button>
              </ListItem>
              <ListItem>
                ليلى خالد
                <Button size="sm" ml={2}>
                  <Icon as={FaPhone} />
                </Button>
              </ListItem>
              <ListItem>
                سامي علي
                <Button size="sm" ml={2}>
                  <Icon as={FaPhone} />
                </Button>
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel>
            <Heading size="lg" mb={4}>
              الإعدادات
            </Heading>
            <Box mb={4}>
              <Input placeholder="اسم الشركة" />
            </Box>
            <Box mb={4}>
              <Input placeholder="رقم الهاتف" />
            </Box>
            <Box mb={4}>
              <Select placeholder="اللغة">
                <option>العربية</option>
                <option>English</option>
              </Select>
            </Box>
            <Box>
              <Switch mr={2} />
              وضع داكن
            </Box>
          </TabPanel>

          <TabPanel>
            <Heading size="lg" mb={4}>
              الإحصائيات
            </Heading>
            <Image src="https://images.unsplash.com/photo-1495592822108-9e6261896da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnQlMjByZWQlMjBncmVlbnxlbnwwfHx8fDE3MTA4MjAwNDV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          </TabPanel>
        </TabPanels>

        <TabList>
          <Tab>
            <Icon as={FaHome} />
          </Tab>
          <Tab>
            <Icon as={FaPlane} />
          </Tab>
          <Tab>
            <Icon as={FaUsers} />
          </Tab>
          <Tab>
            <Icon as={FaCog} />
          </Tab>
          <Tab>
            <Icon as={FaChartBar} />
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default Index;
