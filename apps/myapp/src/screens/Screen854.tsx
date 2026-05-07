import { Pressable, Text, View } from 'react-native';

import { copy854 } from '../generated/copy/copy854';
import { layout854 } from '../generated/layouts/layout854';
import { palette854 } from '../generated/palettes/palette854';

export function Screen854() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout854.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy854.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy854.detail} / {palette854.name}
			</Text>
		</View>
	);
}
