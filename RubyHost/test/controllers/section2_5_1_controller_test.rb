require 'test_helper'

class Section251ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_5_1_index_url
    assert_response :success
  end

end
