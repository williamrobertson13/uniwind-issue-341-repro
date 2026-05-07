import { Pressable, Text, View } from 'react-native';

import { copy798 } from '../generated/copy/copy798';
import { layout798 } from '../generated/layouts/layout798';
import { palette798 } from '../generated/palettes/palette798';

export function Screen798() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout798.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy798.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy798.detail} / {palette798.name}
			</Text>
		</View>
	);
}
