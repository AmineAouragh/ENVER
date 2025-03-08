import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { useState } from 'react' 

export function HibernateConfigForm(){
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-xl font-Inter">Hibernate</CardTitle>
                    <CardDescription>
                        <p>Configure Hibernate for your Java project to enable database interactions and ORM.</p>
                    </CardDescription>
                    <CardContent className="space-y-2">
                        <div className='space-y-1 flex flex-row items-center w-full'>
                            <Label htmlFor="hibernate_dialect" className="mr-4 text-lg w-1/3">Hibernate Dialect</Label>
                            <Select id="hibernate_dialect" onValueChange={value => handleHibernateDialectChange(value)}>
                                <SelectTrigger className="bg-white w-2/3 text-md font-semibold font-Inter rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border text-slate-600 border-slate-300">
                                    <SelectValue placeholder="Select a Hibernate dialect" />
                                </SelectTrigger>
                                <SelectContent className="rounded-lg text-slate-600 shadow-lg focus:outline-none border border-slate-300">
                                    <SelectGroup>
                                    <SelectItem className="text-md font-Inter font-semibold" value="mysqldialect">org.hibernate.dialect.MySQLDialect</SelectItem>
                                    <SelectItem className="text-md font-Inter font-semibold" value="postgresqldialect">org.hibernate.dialect.PostgreSQLDialect</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='mt-1 mb-0 flex flex-row items-center w-full'>
                            <Label htmlFor="jdbc_url" className="mr-4 text-lg w-1/3">JDBC URL</Label>
                            <Input id="jdbc_url" className="w-2/3 text-md font-semibold font-Inter rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 border border-slate-300 text-slate-600" defaultValue={jdbcUrl} />
                        </div>
                        <p className='text-right text-gray-700 mt-0'>Replace mydb with your database name</p>
                        <div className='space-y-1 flex flex-row items-center w-full'>
                            <Label htmlFor="db_username" className="mr-4 text-lg w-1/3">Username</Label>
                            <Input id="db_username" className="w-2/3 text-md font-semibold font-Inter rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 border border-slate-300 text-slate-600" />
                        </div>
                        <div className='space-y-1 flex flex-row items-center w-full'>
                            <Label htmlFor="db_pass" className="mr-4 text-lg w-1/3">Password</Label>
                            <Input id="db_pass" type="password" className="w-2/3 text-md font-semibold font-Inter rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 border border-slate-300 text-slate-600" />
                        </div>
                    </CardContent>
            </CardHeader>
        </Card>
    )
}