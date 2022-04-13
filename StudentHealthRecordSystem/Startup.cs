using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(StudentHealthRecordSystem.Startup))]
namespace StudentHealthRecordSystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
