import { Pressable, Text, View } from 'react-native';

import { copy473 } from '../generated/copy/copy473';
import { layout473 } from '../generated/layouts/layout473';
import { palette473 } from '../generated/palettes/palette473';

export function Screen473() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout473.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy473.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy473.detail} / {palette473.name}
			</Text>
		</View>
	);
}
