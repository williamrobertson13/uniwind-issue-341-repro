import { Pressable, Text, View } from 'react-native';

import { copy612 } from '../generated/copy/copy612';
import { layout612 } from '../generated/layouts/layout612';
import { palette612 } from '../generated/palettes/palette612';

export function Screen612() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout612.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy612.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy612.detail} / {palette612.name}
			</Text>
		</View>
	);
}
