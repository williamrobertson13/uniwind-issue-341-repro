import { Pressable, Text, View } from 'react-native';

import { copy611 } from '../generated/copy/copy611';
import { layout611 } from '../generated/layouts/layout611';
import { palette611 } from '../generated/palettes/palette611';

export function Screen611() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout611.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy611.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy611.detail} / {palette611.name}
			</Text>
		</View>
	);
}
