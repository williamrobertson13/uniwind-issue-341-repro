import { Pressable, Text, View } from 'react-native';

import { copy6 } from '../generated/copy/copy6';
import { layout6 } from '../generated/layouts/layout6';
import { palette6 } from '../generated/palettes/palette6';

export function Screen6() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout6.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy6.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy6.detail} / {palette6.name}
			</Text>
		</View>
	);
}
