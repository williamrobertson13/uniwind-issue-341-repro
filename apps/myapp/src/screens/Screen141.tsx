import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy141 } from '../generated/copy/copy141';
import { layout141 } from '../generated/layouts/layout141';
import { palette141 } from '../generated/palettes/palette141';

const RuntimeView141 = withUniwind(View);

export function Screen141() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView141 styleClassName={layout141.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy141.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy141.detail} / {palette141.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
