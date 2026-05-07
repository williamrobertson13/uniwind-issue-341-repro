import { Pressable, Text, View } from 'react-native';

import { copy661 } from '../generated/copy/copy661';
import { layout661 } from '../generated/layouts/layout661';
import { palette661 } from '../generated/palettes/palette661';

export function Screen661() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout661.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy661.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy661.detail} / {palette661.name}
			</Text>
		</View>
	);
}
