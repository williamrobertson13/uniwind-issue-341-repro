import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy657 } from '../generated/copy/copy657';
import { layout657 } from '../generated/layouts/layout657';
import { palette657 } from '../generated/palettes/palette657';

const RuntimeView657 = withUniwind(View);

export function Screen657() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView657 styleClassName={layout657.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy657.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy657.detail} / {palette657.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
