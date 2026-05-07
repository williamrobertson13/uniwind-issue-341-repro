import { Pressable, Text, View } from 'react-native';

import { copy393 } from '../generated/copy/copy393';
import { layout393 } from '../generated/layouts/layout393';
import { palette393 } from '../generated/palettes/palette393';

export function Screen393() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout393.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy393.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy393.detail} / {palette393.name}
			</Text>
		</View>
	);
}
