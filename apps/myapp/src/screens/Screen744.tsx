import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy744 } from '../generated/copy/copy744';
import { layout744 } from '../generated/layouts/layout744';
import { palette744 } from '../generated/palettes/palette744';

const RuntimeView744 = withUniwind(View);

export function Screen744() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView744 styleClassName={layout744.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy744.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy744.detail} / {palette744.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
