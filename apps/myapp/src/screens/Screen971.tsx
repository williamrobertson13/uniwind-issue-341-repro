import { Pressable, Text, View } from 'react-native';

import { copy971 } from '../generated/copy/copy971';
import { layout971 } from '../generated/layouts/layout971';
import { palette971 } from '../generated/palettes/palette971';

export function Screen971() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout971.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy971.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy971.detail} / {palette971.name}
			</Text>
		</View>
	);
}
