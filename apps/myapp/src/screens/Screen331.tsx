import { Pressable, Text, View } from 'react-native';

import { copy331 } from '../generated/copy/copy331';
import { layout331 } from '../generated/layouts/layout331';
import { palette331 } from '../generated/palettes/palette331';

export function Screen331() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout331.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy331.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy331.detail} / {palette331.name}
			</Text>
		</View>
	);
}
