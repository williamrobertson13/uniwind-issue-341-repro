import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy525 } from '../generated/copy/copy525';
import { layout525 } from '../generated/layouts/layout525';
import { palette525 } from '../generated/palettes/palette525';

const RuntimeView525 = withUniwind(View);

export function Screen525() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView525 styleClassName={layout525.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy525.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy525.detail} / {palette525.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
