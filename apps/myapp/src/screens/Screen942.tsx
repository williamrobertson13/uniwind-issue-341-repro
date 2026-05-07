import { Pressable, Text, View } from 'react-native';

import { copy942 } from '../generated/copy/copy942';
import { layout942 } from '../generated/layouts/layout942';
import { palette942 } from '../generated/palettes/palette942';

export function Screen942() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout942.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy942.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy942.detail} / {palette942.name}
			</Text>
		</View>
	);
}
