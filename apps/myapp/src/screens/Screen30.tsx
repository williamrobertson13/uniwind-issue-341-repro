import { Pressable, Text, View } from 'react-native';

import { copy30 } from '../generated/copy/copy30';
import { layout30 } from '../generated/layouts/layout30';
import { palette30 } from '../generated/palettes/palette30';

export function Screen30() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout30.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy30.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy30.detail} / {palette30.name}
			</Text>
		</View>
	);
}
