import { Pressable, Text, View } from 'react-native';

import { copy910 } from '../generated/copy/copy910';
import { layout910 } from '../generated/layouts/layout910';
import { palette910 } from '../generated/palettes/palette910';

export function Screen910() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout910.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy910.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy910.detail} / {palette910.name}
			</Text>
		</View>
	);
}
