import { Pressable, Text, View } from 'react-native';

import { copy214 } from '../generated/copy/copy214';
import { layout214 } from '../generated/layouts/layout214';
import { palette214 } from '../generated/palettes/palette214';

export function Screen214() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout214.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy214.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy214.detail} / {palette214.name}
			</Text>
		</View>
	);
}
