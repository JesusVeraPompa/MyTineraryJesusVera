import React from 'react'
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
    List,
    ListItem,
    Input,
} from '@material-tailwind/react'
export default function SearchComponents() {
    const [openInput, setOpenInput] = React.useState(false)
    const toggleOpenInput = () => setOpenInput((cur) => !cur)

    const [openDateStart, setOpenDateStart] = React.useState(false)
    const toggleOpenDateStart = () => setOpenDateStart((cur) => !cur)

    const [openDateEnd, setOpenDateEnd] = React.useState(false)
    const toggleOpenDateEnd = () => setOpenDateEnd((cur) => !cur)
    return (
        <>
            <div className="flex flex-col justify-center items-center md:flex-row p-2  mt-10 mb-10">
                <div className="flex flex-col border rounded-lg shadow-lg p-2 md:flex-row">
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="">
                            <h4 className="text-[18px]">Reservation: </h4>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="">
                            <Input
                                label="Where to? Destination"
                                onClick={toggleOpenInput}
                                className="w-[350px]"
                            />
                        </div>
                        <div className="">
                            <Collapse open={openInput}>
                                <Card className="">
                                    <CardBody>
                                        <List>
                                            <ListItem>Russia</ListItem>
                                            <ListItem>China</ListItem>
                                            <ListItem>EE.UU.</ListItem>
                                            <ListItem>France</ListItem>
                                            <ListItem>Japan</ListItem>
                                            <ListItem>Canada</ListItem>
                                            <ListItem>Colombia</ListItem>
                                            <ListItem>Iceland</ListItem>
                                            <ListItem>Argentina</ListItem>
                                            <ListItem>Egypt</ListItem>
                                            <ListItem>Cuba</ListItem>
                                            <ListItem>England</ListItem>
                                        </List>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="">
                            <Input label="Check In" onClick={toggleOpenDateStart} className="" />
                        </div>
                        <div className="">
                            <Collapse open={openDateStart}>
                                <Card className="p-4">
                                    <table className="">
                                        <thead>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <th>2</th>
                                                <th>3</th>
                                                <th>4</th>
                                                <th>5</th>
                                                <th>6</th>
                                                <th>7</th>
                                            </tr>
                                            <tr>
                                                <th>8</th>
                                                <th>9</th>
                                                <th>10</th>
                                                <th>11</th>
                                                <th>12</th>
                                                <th>13</th>
                                                <th>14</th>
                                            </tr>
                                            <tr>
                                                <th>15</th>
                                                <th>16</th>
                                                <th>17</th>
                                                <th>18</th>
                                                <th>19</th>
                                                <th>20</th>
                                                <th>21</th>
                                            </tr>
                                            <tr>
                                                <th>22</th>
                                                <th>23</th>
                                                <th>24</th>
                                                <th>25</th>
                                                <th>26</th>
                                                <th>27</th>
                                                <th>28</th>
                                            </tr>
                                            <tr>
                                                <th>29</th>
                                                <th>30</th>
                                                <th>31</th>
                                                <th>.</th>
                                                <th>.</th>
                                                <th>.</th>
                                                <th>.</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="">
                            <Input label="Check Out" onClick={toggleOpenDateEnd} className="" />
                        </div>
                        <div className="">
                            <Collapse open={openDateEnd}>
                                <Card className="p-4">
                                    <table className="">
                                        <thead>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <th>2</th>
                                                <th>3</th>
                                                <th>4</th>
                                                <th>5</th>
                                                <th>6</th>
                                                <th>7</th>
                                            </tr>
                                            <tr>
                                                <th>8</th>
                                                <th>9</th>
                                                <th>10</th>
                                                <th>11</th>
                                                <th>12</th>
                                                <th>13</th>
                                                <th>14</th>
                                            </tr>
                                            <tr>
                                                <th>15</th>
                                                <th>16</th>
                                                <th>17</th>
                                                <th>18</th>
                                                <th>19</th>
                                                <th>20</th>
                                                <th>21</th>
                                            </tr>
                                            <tr>
                                                <th>22</th>
                                                <th>23</th>
                                                <th>24</th>
                                                <th>25</th>
                                                <th>26</th>
                                                <th>27</th>
                                                <th>28</th>
                                            </tr>
                                            <tr>
                                                <th>29</th>
                                                <th>30</th>
                                                <th>31</th>
                                                <th>.</th>
                                                <th>.</th>
                                                <th>.</th>
                                                <th>.</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="">
                            <Button>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
