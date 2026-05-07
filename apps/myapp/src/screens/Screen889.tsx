import { Pressable, Text, View } from 'react-native';

import { copy889 } from '../generated/copy/copy889';
import { layout889 } from '../generated/layouts/layout889';
import { palette889 } from '../generated/palettes/palette889';

export function Screen889() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout889.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy889.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy889.detail} / {palette889.name}
			</Text>
		</View>
	);
}
