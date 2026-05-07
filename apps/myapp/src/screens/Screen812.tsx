import { Pressable, Text, View } from 'react-native';

import { copy812 } from '../generated/copy/copy812';
import { layout812 } from '../generated/layouts/layout812';
import { palette812 } from '../generated/palettes/palette812';

export function Screen812() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout812.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy812.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy812.detail} / {palette812.name}
			</Text>
		</View>
	);
}
