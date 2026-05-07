import { Pressable, Text, View } from 'react-native';

import { copy2 } from '../generated/copy/copy2';
import { layout2 } from '../generated/layouts/layout2';
import { palette2 } from '../generated/palettes/palette2';

export function Screen2() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout2.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy2.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy2.detail} / {palette2.name}
			</Text>
		</View>
	);
}
