import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy45 } from '../generated/copy/copy45';
import { layout45 } from '../generated/layouts/layout45';
import { palette45 } from '../generated/palettes/palette45';

const RuntimeView45 = withUniwind(View);

export function Screen45() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView45 styleClassName={layout45.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy45.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy45.detail} / {palette45.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
