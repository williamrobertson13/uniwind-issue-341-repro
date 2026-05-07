import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy328 } from '../generated/copy/copy328';
import { layout328 } from '../generated/layouts/layout328';
import { palette328 } from '../generated/palettes/palette328';

const RuntimeView328 = withUniwind(View);

export function Screen328() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView328 styleClassName={layout328.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy328.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy328.detail} / {palette328.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
