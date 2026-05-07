import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy549 } from '../generated/copy/copy549';
import { layout549 } from '../generated/layouts/layout549';
import { palette549 } from '../generated/palettes/palette549';

const RuntimeView549 = withUniwind(View);

export function Screen549() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView549 styleClassName={layout549.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy549.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy549.detail} / {palette549.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
