import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy81 } from '../generated/copy/copy81';
import { layout81 } from '../generated/layouts/layout81';
import { palette81 } from '../generated/palettes/palette81';

const RuntimeView81 = withUniwind(View);

export function Screen81() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView81 styleClassName={layout81.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy81.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy81.detail} / {palette81.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
