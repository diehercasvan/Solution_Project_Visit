using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Aplication_Visit.Controllers;
using DAL;

namespace Aplication_Visit.Models
{
    public class CtrlEmployee : IntEmployee
    {


        public bool insertEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;

            throw new NotImplementedException();
        }
        public bool updateEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            throw new NotImplementedException();
        }
        public bool deleteEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx = new Entities_Visit();
            bool bValidate = false;
            try
            {

                EMPLOYEE  objEmployee =(from empl in ctx.EMPLOYEE
                                             where empl.EMP_ID == emp.iEmp_id
                                              select empl).FirstOrDefault();
                    if (objEmployee != null)
                    {
                        ctx.EMPLOYEE.Remove(objEmployee);
                        ctx.SaveChanges();
                        bValidate = true;
                    }


                   
             
            }
            catch (Exception e) {
                bValidate = false;
                Console.WriteLine(e.Message);
            }
            return bValidate;



        }
        //public List<DtoEmployee> listEmployee()
        //{
        //    Entities_Visit ctx;
        //    using (ctx = new Entities_Visit()) {
        //        var listEmployee = (from empl in ctx.EMPLOYEE
        //                            join rol in ctx.ROLE on empl.ROL_ID equals rol.ROL_ID
        //                            where empl.EMP_STATE == true
        //                            orderby empl.EMP_NAME
        //                            select new DtoEmployee()
        //                            {
        //                                iEmp_id = (int)empl.EMP_ID,
        //                                iRol_id = (int)empl.ROL_ID,
        //                                sRol_name = rol.ROL_NAME,
        //                                iBra_buis_id = (int)empl.BRA_BUIS_ID,
        //                                sEmp_document = empl.EMP_DOCUMENT,
        //                                sEmp_name = empl.EMP_NAME,
        //                                sEmp_surname = empl.EMP_SURNAME,
        //                                sEmp_phone = empl.EMP_PHONE,
        //                                sEmp_phone2 = empl.EMP_PHONE,
        //                                sEmp_cell_phone = empl.EMP_CELL_PHONE,
        //                                sEmp_cell_phone2 = empl.EMP_CELL_PHONE2,
        //                                sEmp_addres = empl.EMP_ADDRES,
        //                                sEmp_mail = empl.EMP_MAIL,
        //                                sEmp_mail2 = empl.EMP_MAIL2
        //                            }
        //                           ).ToList();
        //        return listEmployee;
        //    }
                
        //}
        public List<DtoEmployee> listEmployeeSelect(DtoEmployee emp)
        {
           
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {
                var listEmployee = (from empl in ctx.EMPLOYEE
                                    join rol in ctx.ROLE on empl.ROL_ID equals rol.ROL_ID
                                    where empl.EMP_STATE == true 
                                    && empl.EMP_NAME.Contains(emp.sEmp_name)
                                    || empl.EMP_SURNAME.Contains(emp.sEmp_surname)
                                    || empl.EMP_DOCUMENT.Contains(emp.sEmp_document)
                                    || empl.EMP_MAIL.Contains(emp.sEmp_mail)
                                    orderby empl.EMP_NAME
                                    select new DtoEmployee()
                                    {
                                        iEmp_id = (int)empl.EMP_ID,
                                        iRol_id = (int)empl.ROL_ID,
                                        sRol_name = rol.ROL_NAME,
                                        iBra_buis_id = (int)empl.BRA_BUIS_ID,
                                        sEmp_document = empl.EMP_DOCUMENT,
                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,
                                        sEmp_phone = empl.EMP_PHONE,
                                        sEmp_phone2 = empl.EMP_PHONE,
                                        sEmp_cell_phone = empl.EMP_CELL_PHONE,
                                        sEmp_cell_phone2 = empl.EMP_CELL_PHONE2,
                                        sEmp_addres = empl.EMP_ADDRES,
                                        sEmp_mail = empl.EMP_MAIL,
                                        sEmp_mail2 = empl.EMP_MAIL2
                                    }
                                  ).ToList();
                return listEmployee;
            }

        }
        public List<DtoEmployee> listRoleEmployee()
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {
                var listRole = (from rol in ctx.ROLE
                                    select new DtoEmployee()
                                    {
                                        iRol_id = (int)rol.ROL_ID,
                                        sRol_name = rol.ROL_NAME

                                    }
                                  ).ToList();
                return listRole;
            }

        }
        public List<DtoEmployee> listPermissionEmployee()
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {
                var listRole = (from per in ctx.PERMISSIONS
                                select new DtoEmployee()
                                {
                                    iPermission_id = (int)per.PER_ID,
                                    sPermission_name = per.PER_NAME

                                }
                                  ).ToList();
                return listRole;
            }

        }
        public List<DtoEmployee> loginEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var listEmployee = (from empl in ctx.EMPLOYEE
                                    join rol in ctx.ROLE on empl.ROL_ID equals rol.ROL_ID
                                    where empl.EMP_MAIL == emp.sEmp_mail && empl.EMP_PASSWORD == emp.sEmp_password && empl.EMP_STATE==true
                                    select new DtoEmployee()
                                    {
                                        iRol_id = (int)empl.ROL_ID,
                                        sRol_name = rol.ROL_NAME,
                                        iBra_buis_id = (int)empl.BRA_BUIS_ID,
                                        sEmp_document = empl.EMP_DOCUMENT,
                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,
                                        sEmp_phone = empl.EMP_PHONE,
                                        sEmp_phone2 = empl.EMP_PHONE,
                                        sEmp_cell_phone = empl.EMP_CELL_PHONE,
                                        sEmp_cell_phone2 = empl.EMP_CELL_PHONE2,
                                        sEmp_addres = empl.EMP_ADDRES,
                                        sEmp_mail = empl.EMP_MAIL,
                                        sEmp_mail2 = empl.EMP_MAIL2

                                    }
                                    ).ToList();
                return listEmployee;
            }

        }
        public List<DtoEmployee> ResetPasswordEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var listEmployee = (from empl in ctx.EMPLOYEE
                                    where empl.EMP_MAIL == emp.sEmp_mail && empl.EMP_STATE==true
                                    select new DtoEmployee()
                                    {


                                        iEmp_id=empl.EMP_ID,
                                        bemp_state = empl.EMP_STATE,
                                        sEmp_name=empl.EMP_NAME,
                                        sEmp_surname=empl.EMP_SURNAME,
                                        sEmp_mail=empl.EMP_MAIL

                                    }
                                    ).ToList();

                return listEmployee;
            }

        }
        public List<DtoEmployee> UpdateEmployeePassword(DtoEmployee emp) {

            Entities_Visit ctx;
            using (ctx = new Entities_Visit()) {

                var objEmployee = (from empl in ctx.EMPLOYEE
                                   where empl.EMP_ID== emp.iEmp_id
                                   select empl).FirstOrDefault();
                objEmployee.EMP_PASSWORD = emp.sEmp_password;
                ctx.SaveChanges();

                var ListEmployee = (from empl in ctx.EMPLOYEE
                                    where empl.EMP_PASSWORD==emp.sEmp_password
                                    orderby empl.EMP_NAME
                                    select new DtoEmployee()
                                    {
                                        
                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,
                                        
                                    }).ToList();
                return ListEmployee;

            }

               
        }
        public List<DtoEmployee> ListEmployee(DtoEmployee emp) {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit()) {
                List<DtoEmployee> list = new List<DtoEmployee>();
                DtoEmployee objEmployee;
                try
                {
                    var query = ctx.PR_SEARCH_EMPLOYEE(emp.bemp_state, emp.iBra_buis_id);
                    foreach (var employee in query) {
                        objEmployee = new DtoEmployee();
                        objEmployee.iEmp_id = (int)employee.EMP_ID;
                        objEmployee.iRol_id = (int)employee.ROL_ID;
                        objEmployee.sRol_name = employee.ROL_NAME;
                        objEmployee.sEmp_document = employee.EMP_DOCUMENT;
                        objEmployee.sEmp_name = employee.EMP_NAME;
                        objEmployee.sEmp_surname = employee.EMP_SURNAME;
                        objEmployee.sEmp_phone = employee.EMP_PHONE;
                        objEmployee.sEmp_phone2 = employee.EMP_PHONE;
                        objEmployee.sEmp_cell_phone = employee.EMP_CELL_PHONE;
                        objEmployee.sEmp_cell_phone2 = employee.EMP_CELL_PHONE2;
                        objEmployee.sEmp_addres = employee.EMP_ADDRES;
                        objEmployee.sEmp_mail = employee.EMP_MAIL;
                        objEmployee.sEmp_mail2 = employee.EMP_MAIL2;
                        list.Add(objEmployee);
                    }
                    list.ToList();    
                }
                catch (Exception e) {      
                }
                return list;
            }
        }
        public List<DtoEmployee> ListEmployeeSelect(DtoEmployee emp)
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {
                List<DtoEmployee> list = new List<DtoEmployee>();
                DtoEmployee objEmployee;
                try
                {
                     var query = ctx.PR_SEARCH_EMPLOYEE_SELECTION(emp.bemp_state, emp.iBra_buis_id,emp.sEmp_name,emp.sEmp_surname,emp.sEmp_document,emp.sEmp_mail,emp.sRol_name);
                    foreach (var employee in query)
                    {
                        objEmployee = new DtoEmployee();
                        objEmployee.iEmp_id = (int)employee.EMP_ID;
                        objEmployee.iRol_id = (int)employee.ROL_ID;
                        objEmployee.sRol_name = employee.ROL_NAME;
                        objEmployee.sEmp_document = employee.EMP_DOCUMENT;
                        objEmployee.sEmp_name = employee.EMP_NAME;
                        objEmployee.sEmp_surname = employee.EMP_SURNAME;
                        objEmployee.sEmp_phone = employee.EMP_PHONE;
                        objEmployee.sEmp_phone2 = employee.EMP_PHONE;
                        objEmployee.sEmp_cell_phone = employee.EMP_CELL_PHONE;
                        objEmployee.sEmp_cell_phone2 = employee.EMP_CELL_PHONE2;
                        objEmployee.sEmp_addres = employee.EMP_ADDRES;
                        objEmployee.sEmp_mail = employee.EMP_MAIL;
                        objEmployee.sEmp_mail2 = employee.EMP_MAIL2;
                        list.Add(objEmployee);
                    }
                    list.ToList();
                }
                catch (Exception e)
                {
                }
                return list;
            }
        }

    }
}