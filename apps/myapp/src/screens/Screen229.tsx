import { Pressable, Text, View } from 'react-native';

import { copy229 } from '../generated/copy/copy229';
import { layout229 } from '../generated/layouts/layout229';
import { palette229 } from '../generated/palettes/palette229';

export function Screen229() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout229.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy229.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy229.detail} / {palette229.name}
			</Text>
		</View>
	);
}
