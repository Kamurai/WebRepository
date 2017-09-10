require 'test_helper'

class Section252ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_5_2_index_url
    assert_response :success
  end

end
