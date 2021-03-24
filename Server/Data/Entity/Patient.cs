﻿using System.ComponentModel.DataAnnotations;

namespace Server.Data.Entity
{
    public class Patient
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Age { get; set; }
        public string Weight { get; set; }
        public string Height { get; set; }
        public string Sex { get; set; }
        public string PhoneNumber { get; set; }
        public string HomeNumber { get; set; }
        public string Email { get; set; }
        public string Condition { get; set; }
        public string Doctor { get; set; }
    }
}