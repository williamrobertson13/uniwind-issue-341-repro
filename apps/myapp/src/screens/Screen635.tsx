import { Pressable, Text, View } from 'react-native';

import { copy635 } from '../generated/copy/copy635';
import { layout635 } from '../generated/layouts/layout635';
import { palette635 } from '../generated/palettes/palette635';

export function Screen635() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout635.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy635.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy635.detail} / {palette635.name}
			</Text>
		</View>
	);
}
