import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy512 } from '../generated/copy/copy512';
import { layout512 } from '../generated/layouts/layout512';
import { palette512 } from '../generated/palettes/palette512';

const RuntimeView512 = withUniwind(View);

export function Screen512() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView512 styleClassName={layout512.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy512.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy512.detail} / {palette512.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
