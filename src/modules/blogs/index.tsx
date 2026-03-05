import { blogs } from "../../data";
import { Card } from "../../components/card";
import { useState } from "react";

export default function Blogs() {
    const [dataToUplift, setDatToUplift] = useState('')
    console.log('dataToUplift', dataToUplift);
    
    const funcToUplift = (name: any) => {
        console.log('from fun', name);
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {
                blogs.map(b => {
                    return (
                        <Card
                            b={b}
                            setDatToUplift={setDatToUplift}
                            funcToUplift={funcToUplift}
                        />
                    )
                })
            }
        </div>
    )
}